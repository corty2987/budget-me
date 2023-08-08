import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue"
import TransactionsList from "@/views/TransactionsList.vue";
import ExpenseList from "@/views/ExpenseList.vue";
import HomePage from "@/views/HomePage.vue";
import AddReceipt from "@/views/AddReceipt.vue";
import ViewReceipts from "@/views/ViewReceipts.vue"





const routes = [
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
    {
        path: "/receipt/add",
        name: "AddReceipt",
        component: AddReceipt,
    },
    {
        path: "/receipt/view",
        name: "ViewReceipts",
        component: ViewReceipts,
    },




];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;