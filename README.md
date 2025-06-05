Here's a clear and simple JIRA modeling note for the task you've described:


---

Title: Add Canonical URL Field in CMS > Static Blocks and Reflect in CMS API


---

Description:

We need to enhance the CMS Static Blocks functionality by adding support for a canonical_url field.


---

Requirements:

1. Database Changes:

Table: cms_block

Add Column: canonical_url

Type: VARCHAR

Length: 255



2. Admin Panel (CMS > Static Blocks):

Add a new input field: Canonical URL

Save the value in the newly added canonical_url column in the cms_block table.



3. CMS Blocks API Update:

Endpoint: rest/v3/cms/blocks?identifiers[0]=<identifier>

The API response should include the canonical object for each block.


Example Response:

{
  "code": 0,
  "blocks": [
    {
      "identifier": "footer_links",
      "title": "Footer Links",
      "content": "<p>&lt;html&gt;</p>"
    }
  ],
  "canonical": {
    "url": "http://woohoo.in"
  }
}




---

Notes:

canonical_url already exists in Page Settings API and Category Product API — this update brings CMS Blocks in alignment.

Ensure backward compatibility for existing blocks (where canonical_url may be null).



---

Acceptance Criteria:

[ ] Field Canonical URL visible in Static Block editor.

[ ] Data correctly saved to and fetched from cms_block table.

[ ] API rest/v3/cms/blocks returns canonical URL in expected format.

[ ] Handles cases where canonical_url is empty/null without error.



---

Let me know if you’d like me to format this into a JIRA ticket template (with fields like Story Points, Assignee, etc.).

