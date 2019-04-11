import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent {
  event = {
    id: 1,
    name: "Angular Connect",
    data: "1/4/2019",
    time: "09:00",
    price: 1.0,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1 the street, no where",
      city: "none",
      country: "LH"
    }
  };
}
