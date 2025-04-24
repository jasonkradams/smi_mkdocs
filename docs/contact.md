---
title: Contact Us
description: Get in touch with Spokane Mountaineers
---

# Contact Us

We'd love to hear from you! Whether you have questions about membership, activities, or how to get involved, there are several ways to reach us.

## General Inquiries

**Email:** info@spokanemountaineers.org
**Phone:** (509) 555-1234
**Mailing Address:**
Spokane Mountaineers
P.O. Box 1611
Spokane, WA 99210

## Visit Us

### Monthly General Meetings
First Thursday of each month, 7:00 PM
Mountain Gear Headquarters
6021 E. Mansfield Ave
Spokane Valley, WA 99212

*Meetings are open to the public and feature presentations on outdoor topics.*

## Committee Contacts

### Membership
For questions about joining, renewing, or updating your membership information.
**Email:** membership@spokanemountaineers.org

### Activities
For general questions about trips and activities.
**Email:** activities@spokanemountaineers.org

### Climbing
For information about climbing activities and courses.
**Email:** climbing@spokanemountaineers.org

### Hiking
For information about hiking and backpacking trips.
**Email:** hiking@spokanemountaineers.org

### Skiing
For information about skiing and snowshoeing activities.
**Email:** skiing@spokanemountaineers.org

### Paddling
For information about kayaking, canoeing, and other water sports.
**Email:** paddling@spokanemountaineers.org

### Biking
For information about road and mountain biking activities.
**Email:** biking@spokanemountaineers.org

### Conservation
For information about conservation projects and advocacy.
**Email:** conservation@spokanemountaineers.org

### Education
For information about courses, clinics, and other educational programs.
**Email:** education@spokanemountaineers.org

### Volunteer Coordinator
For information about volunteer opportunities.
**Email:** volunteer@spokanemountaineers.org

### Communications
For website, newsletter, and social media inquiries.
**Email:** communications@spokanemountaineers.org

## Board of Trustees

To contact our Board of Trustees with governance questions or concerns:
**Email:** board@spokanemountaineers.org

## Media Inquiries

For press and media inquiries:
**Email:** media@spokanemountaineers.org
**Phone:** (509) 555-4321

## Connect With Us

<div style="display: flex; gap: 1rem; margin-top: 1rem;">
  <a href="https://facebook.com/spokanemountaineers" aria-label="Facebook">
    <span class="material-icons">facebook</span>
  </a>
  <a href="https://instagram.com/spokanemountaineers" aria-label="Instagram">
    <span class="material-icons">instagram</span>
  </a>
  <a href="https://youtube.com/spokanemountaineers" aria-label="YouTube">
    <span class="material-icons">youtube</span>
  </a>
  <a href="https://meetup.com/spokanemountaineers" aria-label="Meetup">
    <span class="material-icons">groups</span>
  </a>
</div>

## Send Us a Message

<form action="https://formspree.io/f/xzbowpqd" method="POST" class="grid gap-4 max-w-md">
  <div>
    <label for="name" class="block text-sm font-medium mb-1">Name</label>
    <input type="text" id="name" name="name" required class="w-full p-2 border rounded">
  </div>

  <div>
    <label for="email" class="block text-sm font-medium mb-1">Email</label>
    <input type="email" id="email" name="email" required class="w-full p-2 border rounded">
  </div>

  <div>
    <label for="subject" class="block text-sm font-medium mb-1">Subject</label>
    <select id="subject" name="subject" class="w-full p-2 border rounded">
      <option value="general">General Inquiry</option>
      <option value="membership">Membership Question</option>
      <option value="activities">Activities Question</option>
      <option value="volunteer">Volunteer Information</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div>
    <label for="message" class="block text-sm font-medium mb-1">Message</label>
    <textarea id="message" name="message" rows="5" required class="w-full p-2 border rounded"></textarea>
  </div>

  <button type="submit" class="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">Send Message</button>
</form>
\`\`\`

```html file="overrides/partials/footer.html"
{% import "partials/language.html" as lang with context %}

&lt;!-- Footer -->
<footer class="md-footer">

  &lt;!-- Further information -->
  {% if page.previous_page or page.next_page %}
    <nav
      class="md-footer__inner md-grid"
      aria-label="{{ lang.t('footer.title') }}"
    >

      &lt;!-- Link to previous page -->
      {% if page.previous_page %}
        {% set direction = lang.t("footer.previous") %}
        <a
          href="{{ page.previous_page.url | url }}"
          class="md-footer__link md-footer__link--prev"
          aria-label="{{ direction }}: {{ page.previous_page.title | e }}"
          rel="prev"
        >
          <div class="md-footer__button md-icon">
            {% include ".icons/material/arrow-left.svg" %}
          </div>
          <div class="md-footer__title">
            <div class="md-ellipsis">
              <span class="md-footer__direction">
                {{ direction }}
              </span>
              {{ page.previous_page.title }}
            </div>
          </div>
        </a>
      {% endif %}

      &lt;!-- Link to next page -->
      {% if page.next_page %}
        {% set direction = lang.t("footer.next") %}
        <a
          href="{{ page.next_page.url | url }}"
          class="md-footer__link md-footer__link--next"
          aria-label="{{ direction }}: {{ page.next_page.title | e }}"
          rel="next"
        >
          <div class="md-footer__title">
            <div class="md-ellipsis">
              <span class="md-footer__direction">
                {{ direction }}
              </span>
              {{ page.next_page.title }}
            </div>
          </div>
          <div class="md-footer__button md-icon">
            {% include ".icons/material/arrow-right.svg" %}
          </div>
        </a>
      {% endif %}
    </nav>
  {% endif %}

  &lt;!-- Additional navigation and information -->
  <div class="md-footer-meta md-typeset">
    <div class="md-footer-meta__inner md-grid">

      &lt;!-- Copyright and theme information -->
      <div class="md-footer-copyright">
        {% if config.copyright %}
          <div class="md-footer-copyright__highlight">
            {{ config.copyright }}
          </div>
        {% endif %}
        Made with
        <a
          href="https://squidfunk.github.io/mkdocs-material/"
          target="_blank" rel="noopener"
        >
          Material for MkDocs
        </a>
      </div>

      &lt;!-- Custom footer content -->
      <div class="md-footer-links">
        <a href="{{ 'index' | url }}" class="md-footer-link">Home</a>
        <a href="{{ 'about' | url }}" class="md-footer-link">About</a>
        <a href="{{ 'events' | url }}" class="md-footer-link">Events</a>
        <a href="{{ 'join' | url }}" class="md-footer-link">Join</a>
        <a href="{{ 'volunteer' | url }}" class="md-footer-link">Volunteer</a>
        <a href="{{ 'contact' | url }}" class="md-footer-link">Contact</a>
      </div>

      &lt;!-- Social links -->
      {% include "partials/social.html" %}
    </div>
  </div>
</footer>
