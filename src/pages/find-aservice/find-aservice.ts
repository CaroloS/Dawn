import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-find-aservice',
  templateUrl: 'find-aservice.html'
})
export class FindAServicePage {
  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no'
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only
    toolbar: 'yes', //iOS only
    enableViewportScale: 'no', //iOS only
    allowInlineMediaPlayback: 'no',//iOS only
    presentationstyle: 'pagesheet',//iOS only
    fullscreen: 'yes',//Windows only
  };

  services = [
    {
      title: "Bipolar disorder",
      links: [
        {
          text: "Bipolar UK NT support group",
          url: "https://www.bipolaruk.org/Pages/Category/support-groups"
        }
      ]
    },
    {
      title: "Carers",
      links: [
        {
          text: "Carers UK",
          url: "http://www.carersuk.org/"
        },
        {
          text: "Carers network",
          url: "http://carers-network.org.uk/"
        }
      ]
    },
    {
      title: "Dementia and elderly care",
      links: [
        {
          text: "Age UK",
          url: "https://www.ageuk.org.uk/"
        },
        {
          text: "Alzheimer's society",
          url: "https://www.alzheimers.org.uk/"
        }
      ]
    },
    {
      title: "General",
      links: [
        {
          text: "Changing lives",
          url: "http://www.changing-lives.org.uk/"
        },
        {
          text: "Mental health foundation",
          url: "https://www.mentalhealth.org.uk/"
        },
        {
          text: "Mental health concern",
          url: "http://www.mentalhealthconcern.org/"
        },
        {
          text: "Time to change",
          url: "https://www.time-to-change.org.uk/"
        }
      ]
    },
    {
      title: "Get active",
      links: [
        {
          text: "Linkskill centre healthy walks",
          url: "https://www.walkingforhealth.org.uk/walkfinder/linskill-healthy-walks-community-interest-company"
        }
      ]
    },
    {
      title: "Know your rights",
      links: [
        {
          text: "Independant advocacy",
          url: "http://independentadvocacy.org/"
        },
        {
          text: "ISOS",
          url: "https://www.internationalsos.com/"
        }
      ]
    },
    {
      title: "Learn a skill",
      links: [
        {
          text: "Key enterprises",
          url: "http://www.key-enterprises.com/"
        },
        {
          text: "North Tyneside art studio",
          url: "http://northtynesideartstudio.org.uk/"
        }
      ]
    },
    {
      title: "Learning disability",
      links: [
        {
          text: "LD: North East",
          url: "http://www.ldne.org.uk/"
        },
        {
          text: "Mencap North Tyneside",
          url: "https://www.mencap.org.uk/?gclid=CjwKCAiA6K_QBRA8EiwASvtjZSGa1shvRZd2oqMyx93UKoPcNn34mEFx9CbP6pHcerpdWhEkbXTekRoCgGQQAvD_BwE"
        },
        {
          text: "New Prospects",
          url: "https://www.newprospects.org.uk/"
        }
      ]
    },
    {
      title: "Meet people",
      links: [
        {
          text: "CAMEO (Come And Meet Each Other)",
          url: "http://www.cameonorthtyneside.org.uk/"
        },
        {
          text: "Northumberland Tyne and Wear NHS Foundation Trust",
          url: "https://www.northumbria.nhs.uk/our-services/mental-health-services/north-tyneside-talking-therapies"
        }
      ]
    },
    {
      title: "National services",
      links: [
        {
          text: "Northumberland Tyne and Wear NHS Foundation Trust",
          url: "https://www.ntw.nhs.uk/"
        },
        {
          text: " Northumbria Healthcare NHS Foundation Trust",
          url: "https://www.northumbria.nhs.uk/"
        },
        {
          text: "Public Health England",
          url: "https://www.gov.uk/government/organisations/public-health-england"
        },
        {
          text: "Mental health North East",
          url: "http://mhne.org.uk/"
        },
        {
          text: "Social prescribing",
          url: "http://www.socialprescribing.org.uk/"
        }
      ]
    },
    {
      title: "Substance misuse",
      links: [
        {
          text: "Talk to Frank",
          url: "http://www.talktofrank.com/"
        }
      ]
    }
  ];

  constructor(private theInAppBrowser: InAppBrowser) {
  }

  public openWithInAppBrowser(url: string,) {
    let target = "_blank";
    this.theInAppBrowser.create(url, target, this.options);
  }


}
