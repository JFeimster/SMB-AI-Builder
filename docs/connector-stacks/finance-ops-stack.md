# Finance Ops Stack

## What This Stack Is For
This stack helps organize receipts, categorize expenses, and draft preliminary financial reports, reducing the manual data entry burden for bookkeepers or business owners.

## Minimum Stack
- **Drive (Google Drive)**: Secure, organized storage for digital receipts and invoices.
- **Gmail**: For receiving digital invoices and communicating with vendors/clients.
- **QuickBooks (or Xero)**: The source-of-truth accounting software.
- **GPT (with Vision)**: To extract data (amounts, dates, vendors) from receipt images or PDFs.

## Expanded Stack
*(Add these only after the minimum stack is working reliably)*
- **Hubdoc/Dext**: Dedicated receipt capture and OCR tools to replace manual Drive uploads.
- **Zapier/Make**: To auto-save email attachments with "invoice" in the subject directly to Drive.
- **Stripe/Square**: Connected directly to QuickBooks for automated revenue logging.

## Data Flow
1. An invoice or receipt is received via **Gmail** or scanned.
2. The file is saved to a designated folder in **Drive**.
3. **GPT (Vision)** reviews the document to extract the vendor, date, amount, and suggested category.
4. The extracted data is manually entered (or imported) into **QuickBooks** as an unapproved expense.
5. A human strictly reviews the entry against the original document before finalizing it in **QuickBooks**.

## What AI Can Draft
- Data extraction from unstructured receipts (Vendor, Date, Total).
- Preliminary suggestions for expense categories based on the vendor name.
- Draft emails to vendors requesting missing W-9s or updated invoices.

## What AI Should Not Decide
- Final approval of any expense, payment, or ledger entry.
- Tax categorizations or compliance decisions.
- Sending payments autonomously.
- **Sensitive financial operations require strict human review without exception.**

## Risk Level
**Sensitive / High**. Errors in finance operations can lead to tax liabilities, cash flow issues, or compliance breaches. AI is strictly a drafting and extraction tool here; it is never the final decision maker.

## Setup Checklist
- [ ] Create a dedicated "To Be Processed" folder in Drive for receipts.
- [ ] Establish a clear Chart of Accounts in QuickBooks.
- [ ] Write a structured prompt for GPT to ensure consistent data extraction formats (e.g., JSON or CSV).
- [ ] Document the human review process to ensure nothing is approved blindly.

## Starter GPT Prompt
```text
I am uploading an image of a recent business receipt.
Please extract the following information and format it clearly:
- Vendor Name
- Date of Transaction
- Total Amount
- Suggested Expense Category (e.g., Meals, Software, Travel)

Do not invent any numbers. If a value is unclear, state "Unclear".
```

## Success Criteria
- Time spent on manual data entry for receipts is significantly reduced.
- The books are kept up-to-date weekly rather than in a frantic rush at month-end.
- Human review is intended to reduce categorization and ledger-entry errors, but accuracy is not guaranteed.

## Related Docs
- [Connectors Directory](../connectors/README.md)
- [Workflow Connector Maps](../workflow-connector-maps/README.md)
- [Tools: Connectors](../../pages/tools/connectors.html)
