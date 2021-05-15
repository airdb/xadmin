import axios from 'axios'

export const getTreeItems = () => {
    return axios.get("https://scf.baobeihuijia.com/test/airdb/v1/noah/tree")
}
