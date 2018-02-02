/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-a11y-announcer.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />

declare namespace Polymer {

  /**
   * `iron-a11y-announcer` is a singleton element that is intended to add a11y
   * to features that require on-demand announcement from screen readers. In
   * order to make use of the announcer, it is best to request its availability
   * in the announcing element.
   *
   * Example:
   *
   *     Polymer({
   *
   *       is: 'x-chatty',
   *
   *       attached: function() {
   *         // This will create the singleton element if it has not
   *         // been created yet:
   *         Polymer.IronA11yAnnouncer.requestAvailability();
   *       }
   *     });
   *
   * After the `iron-a11y-announcer` has been made available, elements can
   * make announces by firing bubbling `iron-announce` events.
   *
   * Example:
   *
   *     this.fire('iron-announce', {
   *       text: 'This is an announcement!'
   *     }, { bubbles: true });
   *
   * Note: announcements are only audible if you have a screen reader enabled.
   */
  class IronA11yAnnouncer extends Polymer.Element {

    /**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */
    mode: string|null|undefined;
    _text: string|null|undefined;
    created(): any;

    /**
     * Cause a text string to be announced by screen readers.
     *
     * @param text The text that should be announced.
     */
    announce(text: string): any;
    _onIronAnnounce(event: any): any;
  }
}

interface HTMLElementTagNameMap {
  "iron-a11y-announcer": Polymer.IronA11yAnnouncer;
}
