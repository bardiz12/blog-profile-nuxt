import Vue from "vue"

import BaseComponents from "@/components/Atom"

for(let key in BaseComponents){
    const component = BaseComponents[key]
    Vue.component(component.name, component)
}