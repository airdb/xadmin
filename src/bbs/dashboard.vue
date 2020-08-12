<template>
    <nv-list
        :action="products.action"
        :type="products.type"
        :templates="products.templates"
        :data="products.data">
    </nv-list>
</template>
<script>
export default {
    data() {
        return {
            products: {
                type: 'flat',
                templates: {
                    name: '${name}',
                    link: '/#/${name}',
                },
                action: {
                    url: '/api/v1/products',
                    method: 'get',
                    params: {}
                },
                data: [
                    {
                        "id": 1,
                        "uid": "b598b424-1d7b-328e-a8fd-af9acb457f54",
                        "name": "UV"
                    },
                    {
                        "id": 1,
                        "uid": "b598b424-1d7b-328e-a8fd-af9acb457f54",
                        "name": "PV"
                    },
                    {
                        "id": 1,
                        "uid": "b598b424-1d7b-328e-a8fd-af9acb457f54",
                        "name": "xadmin"
                    },
                    {
                        "id": 2,
                        "uid": "f7dd5720-4dca-3e92-a24d-8ba37e096293",
                        "name": "archer"
                    },
                    {
                        "id": 3,
                        "uid": "f7dd5720-4dca-3e92-a24d-8ba37e096293",
                        "name": "payment"
                    },
                    {
                        "id": 4,
                        "uid": "f7dd5720-4dca-3e92-a24d-8ba37e096293",
                        "name": "live"
                    },
                ]
            },
        }
    }
}
</script>

