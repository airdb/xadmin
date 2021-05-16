<template>
    <div class="treeWrapper">
        <NvTree
            :items="items"
            :search="search"
            :checkbox="checkbox"
            @on-check-change="onCheckChangeHandler"
        ></NvTree>
    </div>
</template>

<script>

export default {
    name: 'nvTreeCheckedDemo',
    data() {
        const self = this;
        return {
            search: true,
            checkbox: true,
            items: {},
        };
    },
    methods: {
        onCheckChangeHandler: function () {
            this.$Message.info('check changed');
        },
    },
    mounted() {
        var _this = this

        _this.$request({
            url: "/airdb/v1/noah/tree",
            method: "get"
        }).then(function(resp){
            console.log(resp.data.data)
            _this.items = resp.data
        })
    }
};
</script>

<style lang="less">
</style>
