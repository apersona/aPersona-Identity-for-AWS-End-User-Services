"use strict";var c=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var g=(t,e)=>{for(var n in e)c(t,n,{get:e[n],enumerable:!0})},m=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of i(e))!u.call(t,r)&&r!==n&&c(t,r,{get:()=>e[r],enumerable:!(a=p(e,r))||a.enumerable});return t};var N=t=>m(c({},"__esModule",{value:!0}),t);var w={};g(w,{getAsmSalt:()=>T,getSMTP:()=>l,getSecret:()=>S});module.exports=N(w);var s=require("@aws-sdk/client-secrets-manager"),o=new s.SecretsManagerClient({region:process.env.AWS_REGION}),S=async()=>{let t=await o.send(new s.GetSecretValueCommand({SecretId:`amfa/${process.env.TENANT_ID}/secret`,VersionStage:"AWSCURRENT"}));return JSON.parse(t.SecretString)},T=async()=>(await S())?.asmSalt,l=async()=>{let t=await o.send(new s.GetSecretValueCommand({SecretId:`amfa/${process.env.TENANT_ID}/smtp`,VersionStage:"AWSCURRENT"})),e=JSON.parse(t.SecretString);return e.secure=e.secure==="true"||e.secure===!0,e};0&&(module.exports={getAsmSalt,getSMTP,getSecret});
//# sourceMappingURL=getKms.js.map
