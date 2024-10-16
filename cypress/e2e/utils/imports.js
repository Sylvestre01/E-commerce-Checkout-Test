import CheckoutPage from "../pages/CheckoutPage";
import Mp3PlayerPage from "../pages/Mp3PlayerPage";
import DashboardPage from "../pages/DashboardPage";
import ProductPage from "../pages/ProductPage";
import { faker, fakerEN_NG} from "@faker-js/faker";
import GenerateData from "./generate.data";

const dashboardPage = new DashboardPage();
const mp3PlayerPage = new Mp3PlayerPage();
const checkoutPage = new CheckoutPage();
const productPage = new ProductPage();
const dataGenerator = new GenerateData()

export {
    dashboardPage,
    mp3PlayerPage,
    checkoutPage,
    productPage,
    faker,
    fakerEN_NG,
    dataGenerator
}