<template>
    <v-container grid-list-xl>
        <v-flex xs12 sm12 md12>
            <v-card-text><h2 class="text-sm-center">Comments</h2></v-card-text>
        </v-flex>
        <v-layout wrap>
            <v-flex xs6 v-for="(comm, index) in newCommentList" :key="index">
                <v-card ><v-card-text>
                    <div class="text-sm-left">
                        <div>{{ comm.comment }}</div>
                    </div>
                </v-card-text></v-card>
            </v-flex>
            <v-flex xs6 sm5 md4>
                <v-textarea
                        class="mx-4"
                        label="Add a comment"
                        rows="1"
                        v-model='newComment'
                ></v-textarea>
                <v-btn v-on:click="saveNewComment">Send</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Comments",
        data () {
            return {
                newCommentList: [],
                newComment:'',
            }
        },
        methods:{
            saveNewComment(){
                this.newCommentList.push({comment:this.newComment});
                localStorage.setItem('comments', this.newCommentList)
                this.newComment = ''
            }
        }
    }
</script>
