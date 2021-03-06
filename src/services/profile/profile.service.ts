import { Injectable } from "@angular/core";
import { Profile, ContentAccess } from "./bean"

@Injectable()
export class ProfileService {

    createProfile(request: Profile, onSuccess, onError) {
        (<any>window).GenieSDK.profile.createProfile(JSON.stringify(request), onSuccess, onError);
    }

    updateProfile(request: Profile, onSuccess, onError) {
        (<any>window).GenieSDK.profile.updateProfile(JSON.stringify(request), onSuccess, onError);
    }

    setCurrentUser(request: string, onSuccess, onError) {
        (<any>window).GenieSDK.profile.setCurrentUser(request, onSuccess, onError);
    }

    getCurrentUser(onSuccess, onError) {
        (<any>window).GenieSDK.profile.getCurrentUser(onSuccess, onError);
    }

    setCurrentProfile(isGuestMode: boolean, request: Profile, onSuccess, onError) {
        (<any>window).GenieSDK.profile.setCurrentProfile(isGuestMode, JSON.stringify(request), onSuccess, onError);
    }

    setAnonymousUser(onSuccess, onError) {
        (<any>window).GenieSDK.profile.setAnonymousUser(onSuccess, onError);
    }

    addContentAccess(cotentAccess: ContentAccess, onSuccess, onError) {
        (<any>window).GenieSDK.profile.addContentAccess(JSON.stringify(cotentAccess), onSuccess, onError);
    }

}