import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("window:keyup", ["$event"]) windowKeyup($event) {
    const arrow = $event.key;
    switch (arrow) {
      case "ArrowUp":
        this.renderer.setStyle(this.el.nativeElement, "color", "red");
        break;
      case "ArrowDown":
        this.renderer.setStyle(this.el.nativeElement, "color", "blue");
        break;
      case "ArrowLeft":
        this.renderer.setStyle(this.el.nativeElement, "color", "green");
        break;
      case "ArrowRight":
        this.renderer.setStyle(this.el.nativeElement, "color", "orange");
        break;
    }
  }
}
