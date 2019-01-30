<template>
    <div class="d-flex justify-content-center wrap">
        <div class="row mt-3 rounded bg-light" style="height:85%;width:70%;">
            <div class="col-3 p-0 border-right">
                <div class="" style="height:20%;background-color:#cce5ff;">
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

                    <div class="input-group input-group-sm align-bottom px-2" 
                        style="height:34%;">
                        <input type="text" class="form-control" 
                            style="height:80%;" placeholder="搜索好友">
                    </div>
                    <!-- search input end -->
                </div>
                <!-- left-head end -->

                <div class="">
                    <ul class="list-group">
                        <li v-for="(friend, index) in friends" :key="index" 
                            class="list-group-item p-2 rounded-0">
                            <div class="d-inline-block" style="width:15%;">
                                <img :src="friend.avatarImg" class="rounded-0">
                            </div>
                            <div class="d-inline-block align-top ml-2" 
                                style="font-size:13px;">
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

                <div class="messageArea pt-3">
                    <div v-for="(message, index) in messages" :key="index" 
                        class="mb-3 px-3">
                        <div v-if="message.name === name" class="d-flex justify-content-end">
                            <div class="text-justify d-inline-block alert alert-primary mr-3 mb-0 p-2" 
                                style="width:80%;word-break:break-all; word-wrap:break-all;">
                                {{message.msg}}
                            </div>
                            <div class="d-inline-block align-top" 
                                style="width:6%;">
                                <img :src="avatarImg" class="rounded-0">
                            </div>
                        </div>
                        <!-- if end -->

                        <div v-else class="">
                            <div class="d-inline-block align-top" style="width:6%;">
                                <img :src="avatarImg" class="rounded-0">
                            </div>
                            <div class="text-justify d-inline-block alert alert-secondary ml-3 mb-0 p-2" 
                                style="width:80%;word-break:break-all; word-wrap:break-all;">
                                {{message.msg}}
                            </div>           
                        </div>
                    </div>
                </div>
                <!-- message end -->

                <div class="inputArea">
                    <div style="height:18%;">
                        <i class="fa fa-smile-o ml-3"></i>
                        <i class="fa fa-picture-o ml-3"></i>
                        <i class="fa fa-folder-o ml-3"></i>
                    </div>
                    <div>
                        <textarea v-model="inputMessage" class="form-control rounded-0 border-0" rows="3"></textarea>
                    </div>
                    <div class="float-right pr-2">
                        <button type="button" @click="sendMsg"
                            class="btn btn-outline-secondary btn-sm dropdown-toggle px-3 py-1">发送</button>
                    </div>
                </div>
                <!-- input end -->
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
            inputMessage: '',
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
            ],
            messages : [
                {
                    name: 'kit',
                    msg: 'helloaaaaaaaaaaaaaaaaaaaaaaa,aaaa,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                },
                {
                    name: 'kit',
                    msg: 'hello aaaa'
                },
                {
                    name: 'kit',
                    msg: 'hello aaaa'
                },
                {
                    name: 'user',
                    msg: 'hello aaaa'
                },
                {
                    name: 'kit',
                    msg: 'hello aaaa'
                },
                {
                    name: 'kit',
                    msg: 'hello aaaa'
                },
                {
                    name: 'kit',
                    msg: 'hello aaaa'
                },
                {
                    name: 'kit',
                    msg: 'hello aaaa'
                },
                {
                    name: 'user',
                    msg: 'hello aaaa'
                },
                {
                    name: 'kit',
                    msg: 'hello aaaa'
                },
                {
                    name: 'kit',
                    msg: 'hello aaaa'
                },
                {
                    name: 'kit',
                    msg: 'hello aaaa'
                }
            ]
        }
    },
    methods: {
        srcollBottom: function () {
            this.$nextTick(() => {
                var container = this.$el.querySelector(".messageArea");
                container.scrollTop = container.scrollHeight;
            });
        },
        sendMsg: function () {
            window.console.log(this.inputMessage);
            var sendMsg = {
                name: this.name,
                msg: this.inputMessage   
            }
            window.console.log(sendMsg);
            this.messages.push(sendMsg);
            window.console.log(this.messages);
            this.inputMessage = '';
            this.srcollBottom();
        }
    },
}
</script>


<style>
.wrap {
    background-color:#dddddd;
    position: absolute;
    width: 100%;
    height: 100% ;
}
.messageArea {
    position: fixed;    /* 屏幕滚动关键 */
    width: 52.5%;
    height: 52%;
    overflow-y: scroll; /* 屏幕滚动关键 */
}
.inputArea {
    position: fixed;
    top: 63%;       /* 相对于头部 */
    width: 52.5%;
    height: 25%;
}
</style>
