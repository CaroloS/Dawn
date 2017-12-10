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

  // array of the services, split into two levels of objects, first for the section, second for the links

  services = [
    // section 1
    {
      title: "Bipolar disorder",
      links: [
        // links for section 1
        {
          text: "Bipolar UK NT support group",
          url: "https://www.bipolaruk.org/Pages/Category/support-groups",
          keywords: "bipolar disorder mood swings anger depression sadness manic UK NT support group"
        }
      ]
    },
    {
      title: "Carers",
      links: [
        {
          text: "Carers UK",
          url: "http://www.carersuk.org/",
          keywords: "carers nurse guardian companion UK"
        },
        {
          text: "Carers network",
          url: "http://carers-network.org.uk/",
          keywords: "carers nurse guardian companion network"
        }
      ]
    },
    {
      title: "Dementia and elderly care",
      links: [
        {
          text: "Age UK",
          url: "https://www.ageuk.org.uk/",
          keywords: "Dementia and elderly care age UK retirement dementia money care health wellbeing savings money fitness home"
        },
        {
          text: "Alzheimer's society",
          url: "https://www.alzheimers.org.uk/",
          keywords: "Dementia and elderly care Alzheimer's society disease diagnosis drugs therapy"
        }
      ]
    },
    {
      title: "General",
      links: [
        {
          text: "Changing lives",
          url: "http://www.changing-lives.org.uk/",
          keywords: "General changing lives charity care support changing lives"
        },
        {
          text: "Mental health foundation",
          url: "https://www.mentalhealth.org.uk/",
          keywords: "General mental health foundation organisation disease help"
        },
        {
          text: "Mental health concern",
          url: "http://www.mentalhealthconcern.org/",
          keywords: "General mental health concern foundation organisation disease help concern"
        },
        {
          text: "Time to change",
          url: "https://www.time-to-change.org.uk/",
          keywords: "General time to change mental health success life"
        }
      ]
    },
    {
      title: "Get active",
      links: [
        {
          text: "Linkskill centre healthy walks",
          url: "https://www.walkingforhealth.org.uk/walkfinder/linskill-healthy-walks-community-interest-company",
          keywords: "Get active linkskill centre healthy walking walks activity outdoors health exercise"
        }
      ]
    },
    {
      title: "Know your rights",
      links: [
        {
          text: "Independant advocacy",
          url: "http://independentadvocacy.org/",
          keywords: "Know your rights independant advocacy help support"
        },
        {
          text: "ISOS",
          url: "https://www.internationalsos.com/",
          keywords: "Know your rights ISOS international sos organisation travel assistance mobility"
        }
      ]
    },
    {
      title: "Learn a skill",
      links: [
        {
          text: "Key enterprises",
          url: "http://www.key-enterprises.com/",
          keywords: "Learn a skill training support key enterprises business"
        },
        {
          text: "North Tyneside art studio",
          url: "http://northtynesideartstudio.org.uk/",
          keywords: "Learn a skill North Tyneside art studio creativity mental health group support life"
        }
      ]
    },
    {
      title: "Learning disability",
      links: [
        {
          text: "LD: North East",
          url: "http://www.ldne.org.uk/",
          keywords: "Learning disability LD North East learning differences disability support children youth local"
        },
        {
          text: "Mencap North Tyneside",
          url: "https://www.mencap.org.uk/?gclid=CjwKCAiA6K_QBRA8EiwASvtjZSGa1shvRZd2oqMyx93UKoPcNn34mEFx9CbP6pHcerpdWhEkbXTekRoCgGQQAvD_BwE",
          keywords: "Learning disability Mencap North Tyneside learning difference disability ability help support children youth teenagers"
        },
        {
          text: "New Prospects",
          url: "https://www.newprospects.org.uk/",
          keywords: "Learning disability New Prospects learning difference disability ability help support children youth teenagers"
        }
      ]
    },
    {
      title: "Meet people",
      links: [
        {
          text: "CAMEO (Come And Meet Each Other)",
          url: "http://www.cameonorthtyneside.org.uk/",
          keywords: "Meet people CAMEO Come And Meet Each Other"
        },
        {
          text: "Northumberland Tyne and Wear NHS Foundation Trust",
          url: "https://www.northumbria.nhs.uk/our-services/mental-health-services/north-tyneside-talking-therapies",
          keywords: "Meet people Northumberland Tyne and Wear NHS Foundation Trust psychotherapy help support mental health wellness wellbeing counselling"
        }
      ]
    },
    {
      title: "National services",
      links: [
        {
          text: "Northumberland Tyne and Wear NHS Foundation Trust",
          url: "https://www.ntw.nhs.uk/",
          keywords: "National services Northumberland Tyne and Wear NHS Foundation Trust self help leaflets support guidance notes guides pdf Northumberland Tyne and Wear"
        },
        {
          text: "Northumbria Healthcare NHS Foundation Trust",
          url: "https://www.northumbria.nhs.uk/",
          keywords: "National services Northumbria Healthcare NHS Foundation Trust health service support trust organisation foundation mental healthcare Northumbria"
        },
        {
          text: "Public Health England",
          url: "https://www.gov.uk/government/organisations/public-health-england",
          keywords: "National services Public Health England government help health official organisation"
        },
        {
          text: "Mental health North East",
          url: "http://mhne.org.uk/",
          keywords: "National services Mental health North East National support health UK government"
        },
        {
          text: "Social prescribing",
          url: "http://www.socialprescribing.org.uk/",
          keywords: "National services social prescribing life mental health and wellbeing adults"
        }
      ]
    },
    {
      title: "Substance misuse",
      links: [
        {
          text: "Talk to Frank",
          url: "http://www.talktofrank.com/",
          keywords: "drugs talk to Frank substances misuse under the influence"
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
