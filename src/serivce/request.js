import axios from 'axios'

export const getTreeItems = () => {
    return axios.get("https://scf.baobeihuijia.com/release/xadmin/tree")
}