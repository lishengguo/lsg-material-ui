import pkgJson from './package.json'
import { actionMixin, registerComponent } from 'maka'
import './style.less'
import * as material from '@material-ui/core/index'; 

const name = pkgJson.name

console.log(material)

registerComponent('material', material)

const state = {
    data: {
        input: ''
    }

}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onChange = (e) => {
        this.base.setState({ 'data.input': e.target.value })
        console.log(this.base.getState('data.input'))
    }
}

const view = {
    component: 'div',
    className: 'lsg-material-ui',
    children: [{
        component: 'material.Button',
        variant: 'outlined',
        color: 'primary',
        children: 'Material Button',
        onClick: `{{()=>alert('click')}}`
    }, {
        component: 'material.TextField',
        label: "Name",
        value: '{{data.input}}',
        onChange: '{{$onChange}}'
    }]
}

export {
    name,
    state,
    action,
    view
}