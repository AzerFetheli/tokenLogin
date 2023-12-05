import { API } from "../axios"

export const RegisterCall=(data)=>{
  let res =  API.post("api/app/register",data)
  return res
}
export const LoginCall=(data)=>{
    let res =  API.post("api/app/login",data)
    return res
  }
  export const ProfileCall=()=>{
    let res =  API.get("api/app/profile")
    return res
  }
