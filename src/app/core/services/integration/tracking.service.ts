import { Injectable } from '@angular/core';
import { ClientRedirectionType, ClientView } from '../../models/enum/enum.model';
import { TimeTakenAdditionalProperty } from '../../models/misc/tracking.model';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private identityEmail: string | undefined;

  constructor() { }

  private flattenObject(ob: any): any {
    const toReturn: any = {};

    for (const i in ob) {
        if (!ob.hasOwnProperty(i)) {
          continue;
        }

        if ((typeof ob[i]) === 'object' && ob[i] !== null) {
          const flatObject = this.flattenObject(ob[i]);
            for (const x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) {
                  continue;
                }

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}

  get tracking() {
    return (window as any).mixpanel;
  }

  eventTrack(action: string, properties: any = {}): void {
    const flattenedObject = this.flattenObject(properties);
    properties = {
      ...flattenedObject,
      Asset: 'Partner Dashboard Web'
    };
    try {
      if (this.tracking) {
        this.tracking.track(action, properties);
      }
    } catch (e) {
      console.error('Tracking error:', e);
    }
  }

  onSignIn(userId: string | undefined, partnerOrgId: number, orgId: string): void {
    try {
      if (this.tracking) {
        this.tracking.identify(userId);
        this.tracking.people.set({
          partnerOrgId,
          orgId
        });
        this.identityEmail = userId;
      }
    } catch (e) {
      console.error('Tracking error:', e);
    }
    this.eventTrack('Sign In');
  }

  onSignUp(userId: string | undefined, partnerOrgId: number, orgId: string): void {
    try {
      if (this.tracking) {
        this.tracking.identify(userId);
        this.tracking.people.set({
          partnerOrgId,
          orgId
        });
        this.identityEmail = userId;
      }
    } catch (e) {
      console.error('Tracking error:', e);
    }
    this.eventTrack('Sign Up');
  }

  onSignOut(): void {
    this.eventTrack('Sign Out');
  }

  onSwitchHomeView(view: ClientView): void {
    this.eventTrack('Switch Home View', {view});
  }

  onClickViewEvent(clientRedirectionType: ClientRedirectionType): void {
    this.eventTrack('Click View', {clientRedirectionType});
  }

  onSimpleSearch(view: ClientView): void {
    this.eventTrack('Simple search', {view});
  }

  trackTimeSpent(view: ClientView, additionalProperties: TimeTakenAdditionalProperty): void {
    this.eventTrack(`Time Spent on ${view} page`, additionalProperties);
  }
}
