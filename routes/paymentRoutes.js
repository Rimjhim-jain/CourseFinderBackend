import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { buySubscription, cancelSubscription, getRazorPayKey, paymentverification } from "../controllers/paymentController.js";

const router = express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated,buySubscription);

//verify payment and save reference in database
router.route("/paymentverification").post(isAuthenticated,paymentverification);

//Get Raazorpay key
router.route("/razorpaykey").get(getRazorPayKey);

//Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated,cancelSubscription);

export default router;