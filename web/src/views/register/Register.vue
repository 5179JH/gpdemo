<template>
  <div id="register" class="main">
    <el-row>
      <el-col :span="10">
        <div class="grid-content bg-purple-dark">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号:" prop="id">
              <el-input placeholder="请输入账号" v-model="ruleForm.id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="pass">
              <el-input placeholder="请输入密码" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="checkPass">
              <el-input placeholder="请再次输入密码" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    var validateFieId = (rule, value, callback) =>{
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      fullscreenLoading: false,
      ruleForm: {
        id: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        id: [{ validator: validateFieId, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.axios.post('api/register', this.ruleForm)
      .then(res => {
        // console.log(res)
        if (res.status === 200) {
          if (res.data.code === 1 || res.data.code === 2 || res.data.code === 3 || res.data.code === 4) {
          this.$message({
            type: 'error',
            message: res.data.message
          })
          this.$refs[formName].resetFields();
          } else {
            this.$message({
            type:'success',
            message: res.data.message
          })
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
            this.$router.push('/home')
          }, 1500);
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>