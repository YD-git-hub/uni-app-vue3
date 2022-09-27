import {defineStore} from "pinia";
import { localStorage } from "@/js_sdk/mp-storage/mp-storage/index.js" 
export const useIndexStore =defineStore('index',{
	state: () => {
		return {
			test:'333'
		}
	},
	getters:{
	},
	actions:{
	}
})