<template>
    <div class="d-flex justify-content-center wrap">
        <div class="row mt-3 rounded bg-light" style="height:85%;width:70%;">
            <div class="col-3 p-0 border-right">
                <div class="bg-primary" style="height:20%;">
                    <div class="p-2" style="height:66%;">
                        <div class="d-inline-block align-top mt-1" style="height:88%">
                            <img :src="avatarImg" alt="" class="rounde">
                        </div>
                        <div class="d-inline-block ml-2">
                            <div>{{name}}</div>
                            <div class="badge badge-secondary">PLUS</div>
                        </div>
                    </div>
                    <!-- avatar and name end -->

                    <div class="input-group input-group-sm align-bottom px-2" style="height:34%;">
                        <input type="text" class="form-control" style="height:80%;" placeholder="搜索好友">
                    </div>
                    <!-- search input end -->
                </div>
                <!-- left-head end -->

                <div class="">
                    <ul class="list-group">
                        <li v-for="(friend, index) in friends" :key="index" class="list-group-item p-2">
                            <div class="d-inline-block" style="width:15%;">
                                <img :src="friend.avatarImg" class="rounded-0">
                            </div>
                            <div class="d-inline-block align-top ml-2" style="font-size:13px;">
                                <strong>{{friend.name}}</strong>
                            </div>
                            <span class="float-right badge badge-primary badge-pill">14</span>
                        </li>
                    </ul>
                </div>
                <!-- friend list end -->
            </div>
            <!-- col-3 end -->

            <div class="col-9 bg-light p-0">
                <div class="align-top p-2 border-bottom" style="height:10%;">
                    <div class="d-inline-block" style="width:5%;">
                        <img :src="avatarImg" class="rounded-0">
                    </div>
                    <div class="d-inline-block align-top ml-2" style="font-size:16px;">
                        <strong>Tomca</strong>
                    </div>
                </div>
                <!-- header end -->

                <div class="" style="height:60%;">
                </div>


                <div class="align-bottom" style="height:30%;background-color:yellow;">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'chatRoom',
    data () {
        return {
            name: 'user',
            avatarImg: 'https://img11.360buyimg.com/ImImg/jfs/t4168/143/1794500544/2881/56f77875/58c74914Nd1f78b32.png',
            friends: [
                {
                    name: 'Cras justo odio',
                    avatarImg: 'https://img11.360buyimg.com/ImImg/jfs/t4168/143/1794500544/2881/56f77875/58c74914Nd1f78b32.png',
                    msgCount: 14
                },
                {
                    name: 'Cras justo odio',
                    avatarImg: 'https://img11.360buyimg.com/ImImg/jfs/t4168/143/1794500544/2881/56f77875/58c74914Nd1f78b32.png',
                    msgCount: 14
                },
                {
                    name: 'aCras justo odio',
                    avatarImg: 'https://img11.360buyimg.com/ImImg/jfs/t4168/143/1794500544/2881/56f77875/58c74914Nd1f78b32.png',
                    msgCount: 14
                },
                {
                    name: 'Cras justo odio',
                    avatarImg: 'https://img11.360buyimg.com/ImImg/jfs/t4168/143/1794500544/2881/56f77875/58c74914Nd1f78b32.png',
                    msgCount: 14
                },
                {
                    name: 'Cras justo odio',
                    avatarImg: 'https://img11.360buyimg.com/ImImg/jfs/t4168/143/1794500544/2881/56f77875/58c74914Nd1f78b32.png',
                    msgCount: 14
                }
            ]
        }
    }
}
</script>


<style>
.wrap {
    background-color:#dddddd;
    position: absolute;
    width: 100%;
    height: 100% ;
}
</style>
