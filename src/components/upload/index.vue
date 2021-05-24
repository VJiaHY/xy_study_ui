<template>
  <div>
    <!-- 内容主体区域 -->
    <el-dialog
            :title="tableNameAndExcelName.excelName+'批量数据导入'"
            :close-on-click-modal="false"
            :visible.sync="showDialog"
            width="60%" @close="setDialogClosed">
        <el-row>
          <el-col style="text-align:center">
            <el-upload
                    class="upload-demo"
                    accept=".xls,.xlsx"
                    ref="upload"
                    :action="netWork"
                    :on-success="uploadSuc"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              <div slot="tip" class="el-upload__tip">只能上传xlsx/xls文件，且不超过500kb</div>
            </el-upload>
            <el-button @click="showDialog = false">返 回</el-button>
          </el-col>
        </el-row>

    </el-dialog>

  </div>
</template>

<script>
  export default {
    data() {
      return {// 控制对话框显示隐藏
        showDialog: false,
        tableNameAndExcelName:{},

        netWork:'',
          fileList: []
      }
    },
    methods: {

      //=========上传方法===========
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      uploadSuc(res) {

        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, this.tableNameAndExcelName.excelName+'批量上传成功,'),
            h('span',null,'共包含'),
            h('span', { style: 'color: red' },  res.data.split("_")[0]),
            h('span' ,null,'条数据,耗时'),
            h('span',{style: 'color: red'}, res.data.split("_")[1]),
            h('span',null,'毫秒')
          ]),
        });
        this.setDialogClosed()
      },
      //========上传方法结束===========teal


      // 编辑初始化页面内容
      async init(tableNameAndExcelName) {
        this.netWork = process.env.VUE_APP_TARGET+tableNameAndExcelName.tableAddr
        this.tableNameAndExcelName  = tableNameAndExcelName
        this.showDialog = true
      },

      // 关闭对话框触发
      setDialogClosed() {
        // 子组件调用父组件方法，并传递参数
        this.$emit('refreshFather')
      },
    }
  }
</script>

<style lang="less" scoped></style>
