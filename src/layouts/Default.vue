    <template>
    <v-app>
        <v-app-bar app color='primary' dark elavation="1">
        <v-app-bar-nav-icon @click.stop="sidebar=!sidebar"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-icon>mdi-account-circle</v-icon>
        </v-app-bar>
        <v-navigation-drawer app v-model="sidebar" :mini-variant.sync="mini">
        <v-list dense color="primary" dark>
            <v-list-item>
            <v-list-item-action>
                <v-icon @click.stop="sidebar = !sidebar">mdi-animation</v-icon>
            </v-list-item-action>
            <v-list-item-title class="py-3">
            <h3>Lista de Tarefas</h3>
            </v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list-item class="px-2">
            <v-list-item-avatar>
            <v-icon>mdi-account-circle</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>Guilherme 2info2</v-list-item-content>
            <v-btn icon small>
            <v-icon @click="mini=!mini">mdi-eye-off</v-icon>
            </v-btn>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
            <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                {{item.title}}
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>
        <v-main>
        <router-view></router-view>
        </v-main>
        <v-footer app class="py-3"><span class="caption">MyToDoList &copy;2021</span></v-footer>
    </v-app>
    </template>

    <script>
    export default {
    data() {
        return {
        sidebar: true,
        mini:false,
        items: [
            {title: "Home", icon:"mdi-account-circle", to:"/"},
            {title: "Perfil", icon:"mdi-account-cog", to:"/perfil"},
            {title: "Logout", icon:"mdi-logout", to:"/sair"},
        ]
        }
    }
    };
    </script>

    <style>

    </style>

