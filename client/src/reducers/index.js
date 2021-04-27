import { combineReducers } from "redux";
import alerts from "./alerts";
import auth from "./auth";
import profile from "./profile";
import post from "./post";

export default combineReducers({ alerts, auth, profile, post });
