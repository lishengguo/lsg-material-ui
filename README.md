lsg-material-ui is an application for registering the material-ui component

## Usage
Your application can use material-ui components by add lsg-material-ui dependency.

1. Add dependency
```bash
$ maka add lsg-material-ui
```

2. Modify the view
```javascript
const view = {
    component: 'div',
    children: [{
        component: 'material.Button',
        children: 'submit'
    }]
}
```

3. Modify the index.html
```html
<script>
    window.main = function (maka) {
        maka.load(['lsg-material-ui']).then(()=>{
            maka.render('yourApp','app')
        })
    }
<script>
```

## Download and run

1. Download
2. Decompress
3. Enter decompress directory
4. Run
```bash
$ yarn start
```

## License

MIT
