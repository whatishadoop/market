<template>
    <div>
      <div class="main-wapper">
        <div class="left-wrapper">
          <el-scrollbar style="height:100%;">
            <div class="busiinfo-summary">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="总体" name="first">
                  <el-progress style="margin-bottom: 16px;" v-for="o in 5" :stroke-width="14" :show-text="true" :percentage="70" :format="format"/>
                </el-tab-pane>
                <el-tab-pane label="月度" name="second">月度</el-tab-pane>
              </el-tabs>
            </div>
            <div class="consult-info">
              <div class="header-wrapper">
                <span>商情资讯</span>
              </div>
              <el-divider></el-divider>
              <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="input">
              </el-input>
              <div v-for="o in 5" class="single-detail-info">
                <div class="headline">
                  <div class="text-wrapper">
                    <div class="text">
                      <span class="name">对目前行情把握不准确</span>
                    </div>
                  </div>
                </div>
                <div class="content-wrapper">
                  <div class="one-content">
                    这里说新闻信息的摘要，可能很长很长很这里说新闻信息的摘要，可能很长很长很这里说新闻信息的摘要，可能很长很长很这里说新闻信息的摘要，可能很长很长很
                  </div>
                  <div class="three-content">
                    <div class="part-one">
                      <span class="text">新浪微博</span><span class="text" style="width: 160px;">2021-01-07 12:00:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-scrollbar>
        </div>
        <div class="right-wrapper">
          <div ref="visualization" style="width: 100%;height: 100%;" />
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import 'vis/dist/vis.css'
import { DataSet, Network } from 'vis'
// 引入uuid文件
import uuidv1 from 'uuid/v1'
let network = null
export default {
  data() {
    return {
      activeName: 'first',
      input: '',
      nodesArray: [{ id: '0', label: '网站订单', title: '网站订单' }],
      edgesArray: [],
      nodes: null,
      edges: null,
      selectNodeId: ''
    }
  },
  mounted() {
    this.create()
  },
  beforeDestroy() {
    if (network !== null) {
      network.destroy()
      network = null
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    format(percentage) {
      return percentage;
    },
    getuuid() {
      return uuidv1()
    },
    fitZoom() {
      network.fit()
    },
    setLayout(type) {
      // 设置布局
      this.destroy()
      this.create(type)
    },
    create(type) {
      // null，undefined，0，”“返回false，其他返回true
      // 默认自左向右
      const layoutType = type || 'RL'
      // create an array with nodes
      this.nodes = new DataSet(
        this.nodesArray
      )

      // create an array with edges
      this.edges = new DataSet(
        this.edgesArray
      )

      const data = {
        nodes: this.nodes,
        edges: this.edges
      }
      const options = {
        layout: {
          randomSeed: 2, // 布局的随机种子，如果不设置，每次进来布局都是随机的；这个数值可以任意设置，只要是个数字就行
          improvedLayout: true, // 使用【 Kamada Kawai】布局算法；如果不用这个算法，会出现很多交叉的线条
          hierarchical: {
            // enabled: true, // 切换分层布局系统
            levelSeparation: 200, // 不同级别之间的距离。
            // nodeSpacing: 100, // 自由轴上节点之间的最小距离,这仅适用于初始布局。如果启用物理，则节点距离将存在有效的节点距离。
            // treeSpacing: 100, // 不同树木之间的距离（独立网络）
            // blockShifting: false, // 每个节点都会检查空白，并尽可能地将它的分支与它一起移动，并在任何级别上考虑nodeSpacing
            // edgeMinimization: false, // 每个节点将尝试沿其自由轴移动以减少其边缘的总长度
            // parentCentralization: false, // 如果为true，则布局算法完成后，父节点将再次居中。
            direction: layoutType,
            sortMethod: 'directed'
          }
        },
        physics: {
          enabled: false // 节点不能重叠,整体图回弹效果
        },
        nodes: {
          shape: 'box',
          heightConstraint: 20,
          widthConstraint: 100
        },
        edges: {
          arrows: 'to',
          color: {
            color: '#2B7CE9',
            highlight: 'red',
            hover: 'red'
          }
        },
        interaction: {
          dragNodes: true,
          tooltipDelay: 0,
          navigationButtons: true,
          keyboard: true,
          hover: true, // 鼠标移过后加粗该节点和连接线
          // multiselect: true, // 按 ctrl 多选
          selectable: true, // 是否可以点击选择
          selectConnectedEdges: false, // 选择节点后是否显示连接线
          hoverConnectedEdges: true // 鼠标滑动节点后是否显示连接线
        }
      }

      // initialize your network!
      network = new Network(this.$refs.visualization, data, options)

      // add event listeners
      network.on('selectNode', params => {
        console.log(params)
      })
      network.on('showPopup', id => {
        this.selectNodeId = id
      })
      network.on('hidePopup', id => {
        this.selectNodeId = ''
      })
      network.on('oncontext', params => {
        if (this.selectNodeId.length === 0) {
          this.selectNodeId = ''
          params.event.preventDefault()
          params.event.stopPropagation()
          return
        }
        params.event.preventDefault()
        params.event.stopPropagation()
        this.popupMenu(params)
      })
      network.on('selectEdge', params => {
        // 简化写法，上述逻辑在对话框点击确定后进行回调
        console.log('selectEdge Event:', params)
      })
    },
    popupMenu(params) {
      const toNodeId = this.selectNodeId
      this.selectNodeId = ''
      this.$contextmenu({
        items: [
          { label: '添加',
            icon: 'el-icon-plus',
            onClick: () => {
              this.addNode(toNodeId)
              // 简化写法，上述逻辑在对话框点击确定后进行回调
              this.associationModelVisible = true
            }
          },
          { label: '删除',
            icon: 'el-icon-delete',
            onClick: () => {
              // 删除子节点
              this._delChildNodes(network, toNodeId)
              // 删除当前节点
              this.nodes.remove({ id: toNodeId })
            }
          }
        ],
        x: params.event.clientX,
        y: params.event.clientY,
        customClass: 'contextmenu',
        zIndex: 999,
        minWidth: 230
      })
    },
    destroy() {
      if (network !== null) {
        network.destroy()
        network = null
      }
    },
    addNode(toNodeId) {
      const nodeId = this.getuuid()
      const edgeId = this.getuuid()
      this.nodes.add({ id: nodeId, label: '用户消费', title: '用户消费' })
      this.nodesArray.push({ id: nodeId, label: '用户消费', title: '用户消费' })
      this.edges.add({
        id: edgeId,
        from: nodeId,
        to: toNodeId,
        label: 'left join'
      })
      this.edgesArray.push({
        id: edgeId,
        from: nodeId,
        to: toNodeId,
        label: 'left join',
        arrows: { to: true }
      })
    },
    _delChildNodes(network, thisNode) {
      const nodes = network.getConnectedNodes(thisNode, 'from')
      if (nodes.length > 0) {
        for (let i = 0; i < nodes.length; i++) {
          this._delChildNodes(network, nodes[i])
          this.nodes.remove({ id: nodes[i] })
        }
      }
    }
  }
}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
.main-wapper {
  width: 100%;
  height: 100%;
  display: flex;
  .left-wrapper {
    height: calc(100vh - 244px);
    width: 331px;
    margin-left: 13px;
    margin-bottom: 13px;
    padding: 0px 0px 12px 12px;
    flex: 1 0 331px;
    background: #FFFFFF;
    border: 1px solid #E7E8F2;
    box-shadow: 0 2px 10px 0 rgba(56,56,56,0.12);
    border-radius: 2px;
    border-radius: 2px;
    box-sizing: border-box;
    .busiinfo-summary {
      padding-right: 6px;
    }
    .consult-info {
      padding-right: 6px;
      .single-detail-info {
        width: 100%;
        border-bottom: 1px solid #e4e4e4;
        padding-top: 16px;
        padding-bottom: 12px;
        .headline {
          width: 100%;
          .text-wrapper {
            display: inline-block;
            width: calc(100% - 100px);
            .text {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .name {
                width: 600px;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: rgba(0,0,0,0.65);
                text-align: left;
                line-height: 22px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
              .num {
                flex: 1;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #5075E7;
                text-align: right;
                line-height: 22px;
              }
            }
          }
        }
        .content-wrapper {
          width: 100%;
          .one-content {
            width: calc(100% - 60px);
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: rgba(0,0,0,0.45);
            text-align: left;
            line-height: 22px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .two-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 660px;
            .part-one {
              flex: 1;
              display: flex;
              align-items: center;
            }
            .part-two {
              flex: 1;
              display: flex;
              align-items: center;
              margin-left: 54px;
            }
          }
          .three-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            .part-one {
              width: 500px;
              .text {
                width: 70px;
                display: inline-block;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: rgba(0,0,0,0.45);
                text-align: left;
                line-height: 22px;
                margin-right: 21px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                &:last-child {
                  margin: 0px;
                }
              }
            }
            .part-two {
              flex: 1;
              display: flex;
              justify-content: flex-end;
              margin-right: 30px;
              .text {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #1890FF;
                line-height: 22px;
                cursor: pointer;
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  }
  .right-wrapper {
    height: calc(100vh - 248px);
    width: 100%;
    margin-left: 13px;
    margin-right: 13px;
    margin-bottom: 13px;
    background: #FFFFFF;
    border: 1px solid #E7E8F2;
    box-shadow: 0 2px 10px 0 rgba(56,56,56,0.12);
    border-radius: 2px;
    border-radius: 2px;
  }
}
</style>
