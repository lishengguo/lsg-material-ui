import pkgJson from './package.json'
import { actionMixin, registerComponent } from 'maka'
import './style.less'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const name = pkgJson.name

registerComponent('material', { Button, TextField })

const state = {
    data: {
        input: 'hello'
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