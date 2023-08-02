import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue"
import TransactionsList from "@/views/TransactionsList.vue";
import ExpenseList from "@/views/ExpenseList.vue";
import HomePage from "@/views/HomePage.vue";


const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,

    },
    {
        path: "/register",
        name: "RegisterPage",
        component: RegisterPage,
    },
    {
         path: "/home",
         name: "HomePage",
         component: HomePage,
    },
    {
        path: "/transactions",
        name: "TransactionsList",
        component: TransactionsList,
    },
    {
        path: "/expenses",
        name: "ExpenseList",
        component: ExpenseList,
    },



];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active-link",

});
export default router;
