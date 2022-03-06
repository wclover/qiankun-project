<template>
  <div class="login_background">
    <div class="login_form">
      <h1 class="login_title">White Clover</h1>
      <el-form ref="loginForm" :model="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            name="username"
            autocomplete="on"
            prefix-icon="el-icon-user-solid"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            autocomplete="on"
            prefix-icon="el-icon-unlock"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <i :class="passwordType === 'password' ? 'el-icon-view' : 'el-icon-key'" />
          </span>
        </el-form-item>
        <el-form-item>
          <div class="login_button" @click="handleLogin">登录</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {setToken} from '@/utils/auth'

export default {
  name: 'Login',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 8) {
        callback(new Error('The password can not be less than 8 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'whiteclover',
        password: 'whiteclover'
      },
      rules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // const { username, password } = this.loginForm
          this.$store.dispatch('user/setUserInfo', this.loginForm)// 存authInfo 信息
          setToken('xxx')
          // 不知道为啥会报错
          this.$router.push({ path: '/' }).catch(e => console.log)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login_background {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url('~@/assets/login.png') no-repeat center;
  background-size: cover;
  .login_form {
    position: absolute;
    width: 25vw;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    text-align: center;
    background-color: rgba(24, 144, 255, 0.2);
    border-radius: 5px;
    padding: 3% 4%;
    .login_title {
      color: #ffffff;
      margin-bottom: 30px;
    }
    .login_button {
      height: 40px;
      line-height: 40px;
      font-size: 17px;
      text-align: center;
      cursor: pointer;
      color: #fcfdfe;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#2e69b1), to(#1d9ec5));
      background-image: linear-gradient(to bottom, #2e69b1, #1d9ec5);
      margin: 20px auto 0;
      border-radius: 5px;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 2px;
      font-size: 16px;
      color: #0ba1f6;
      cursor: pointer;
      user-select: none;
    }
    ::v-deep .el-form-item__label {
      color: #ffffff;
    }
  }
}
</style>
