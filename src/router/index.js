import { createRouter, createWebHistory } from "vue-router";
//admin
import LoginPage from "../pages/admin/LoginPage.vue";
import HomePage from "../pages/admin/HomePage.vue";
import CaterogyList from "../pages/admin/caterogy/CaterogyList.vue";
import AddCaterogy from "../pages/admin/caterogy/AddCaterogy.vue";
import EditCaterogy from "../pages/admin/caterogy/EditCaterogy.vue";
import ProductList from "../pages/admin/product/ProductList.vue";
import AddProduct from "../pages/admin/product/AddProduct.vue";
import EditProduct from "../pages/admin/product/EditProduct.vue";
import OrderList from "../pages/admin/order/OrderList.vue";
import ViewOrder from "../pages/admin/order/ViewOrder.vue";
import NotFound from "../pages/NotFound.vue";
//client

const routes = [
  // part admin
  {
    path: "/admin",
    component: LoginPage,
  },
  {
    path: "/admin/home",
    component: HomePage,
    children: [
      {
        path: "caterogy",
        component: CaterogyList,
      },
      {
        path: "add-caterogy",
        component: AddCaterogy,
      },
      {
        path: "edit-caterogy/:id",
        component: EditCaterogy,
      },
      {
        path: "product",
        component: ProductList,
      },
      {
        path: "add-product",
        component: AddProduct,
      },
      {
        path: "edit-product/:id",
        component: EditProduct,
      },
      {
        path: "order",
        component: OrderList,
      },
      {
        path: "/admin/home/view-order/:id",
        component: ViewOrder,
      },
    ],
  },

  //   {
  //     path: "/admin/home/caterogy",
  //     component: CaterogyList,
  //   },
  //   {
  //     path: "/admin/home/product",
  //     component: ProductList,
  //   },
  //   {
  //     path: "/admin/home/order",
  //     component: OrderList,
  //   },

  //   {
  //     path: "/users/:id(\\d+)",
  //     component: UserDetail,
  //   },
  //   {
  //     path: "/pets",
  //     component: PetList,
  //   },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
