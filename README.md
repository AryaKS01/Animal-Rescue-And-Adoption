1.Customer Role
Customer Mobile Verify ( V1 )
End Point [ /person/mobile/verify ] 
 create
Customer Mobile ( V1 )
End Point [ /person/mobile/:id , /person/mobile ]
 create
 retrieve
 update
 delete
Customer Email ( V1 )
End Point [ /person/email/:id , /person/email ]
 create
 retrieve
 update
 delete
Customer Address ( V1 )
End Point [ /person/address/:id , /person/address/ ]
 create
 retrieve
 update
 delete
Customer Change Password ( V1 )
End Point [ /person/changepassword ]
 create
Customer Transactions ( V1 )
End Point [ /person/transactions/ , /person/transactions/:id ]
 create
 retrieve
Customer Profile ( V1 , V3 )
End Point [ /person/profile , /person/profile/:id ]
 retrieve
 update
Customer ( V1 )
End Point [ /corporate/customers , /person ]
 retrieve
 update
Catalog Product ( V1 )
End Point [ /products/:id , /products/:id/store/:store , /products , /products/store/:store , /products/category/:category_id , /products/store/:store/category/:category_id , /products/category/:category_id/store/:store ]
 retrieve
Product Category ( V1 )
End Point [ /products/:id/categories , /products/:id/categories/:category_id ]
 retrieve
Product Image ( V1 )
End Point [ /products/:id/images/:image , /products/:id/images/:image/store/:store , /products/:id/images , /products/:id/images/store/:store ]
 retrieve
Order Card(s) Retrieval ( V3 )
End Point [ /order/:increment_id/cards , /orders/:increment_id/cards ]
 retrieve
Orders ( V1 , V2 )
End Point [ /spend/:order_id , /spend , /orders/page/:page ]
 retrieve
 create
 delete
Order Items ( V1 )
End Point [ /orders/:id/items ]
 retrieve
Order Addresses ( V1 )
End Point [ /orders/:order_id/addresses/:address_type , /orders/:order_id/addresses ]
 retrieve
Order Comments ( V1 )
End Point [ /orders/:id/comments ]
 retrieve
Post Payment ( V1 )
End Point [ /postpayment ]
 create
Upsert Order Options ( V1 )
End Point [ /upsertOrderOptions ]
 create
Sales Grid ( V1 )
End Point [ /sales/grid ]
 create
Customer Address V3 ( V3 )
End Point [ /customers/:id/addresses/:addressId/ , /customers/:id/addresses ]
 create
 retrieve
 update
 delete
Customer Create/Update/Retrieve ( V3 )
End Point [ /customers/:id , /customers ]
 update
 retrieve
Customer Beneficiary ( V3 )
End Point [ /customers/:customerId/beneficiaries/:beneficiaryId ]
 post
Customer Beneficiary ( V3 )
End Point [ /customers/:customerId/beneficiaries ]
 put
 Delete
Customer Beneficiary Validation ( V3 )
End Point [ /beneficiaries/validations ]
 create
Customer Network ( V3 )
End Point [ /customers/:customerId/network/cards ]
 retrieve
 update
Customer Network ( V3 )
End Point [ /customers/:customerId/network/cards/:entityId ]
 retrieve
Orders V3 (Async/Sync) ( V3 )
End Point [/order/:id, /order ]
 create
 delete
 retrieve
Orders V3 (Async/Sync) ( V3 )
End Point [/orders/:id ]
 create
Orders V3 (Async/Sync) ( V3 )
End Point [/orders ]
 get
 delete
Order Payment ( V1 )
End Point [ /orders/:id/payment ]
 retrieve
Order Status ( V1 , V2 )
End Point [ /status/:refno , /status/ ]
 retrieve
Order Status V3 ( V3 )
End Point [ /order/:refno/status ]
 retrieve
Order Resend ( V1 , V2 )
End Point [ /resend/:refno ]
 retrieve
Order Cancel ( V1 , V2 )
End Point [ /ordercancel/:order_id ]
 retrieve
Order Reverse V3 ( V3 )
End Point [ /order/:id/reverse ]
 delete
EditResend Card History ( V3 )
End Point [ /resend/cards/history ]
 retrieve
Checkout ( V3 )
End Point [ /checkout/payment/methods ]
 create
 retrieve
Payment Card Initialise ( V1 )
End Point [ /payments/:payment_code/initialise ]
 create
Redeem ( V1 )
End Point [ /cardapi/redeem/:order_id , /cardapi/redeem ]
 delete
 create
Activate ( V1 )
End Point [ /cardapi/activate/:order_id , /cardapi/activate ]
 delete
 create
Pincode ( V1 )
End Point [ /pincode/:key ]
 retrieve
Check Balance ( V1 , V2 )
End Point [ /checkbalance ]
 create
History ( V1 )
End Point [ /history ]
 create
Settings ( V1 , V2 )
End Point [ /settings/:id , /settings , /websites/:websiteId/settings ]
 retrieve
Send OTP ( V1 )
End Point [ /sendotp ]
 create
Store Locator ( V1 )
End Point [ /storelocator ]
 create
Discount API ( V1 )
End Point [ /discount ]
 create
Discount API V3 ( V3 )
End Point [ /discounts ]
 create
Verify OTP ( V1 )
End Point [ /verifyotp ]
 create
Spend Refernce Number ( V1 , V2 )
End Point [ /refno ]
 retrieve
CMS ( V1 )
End Point [ /cms ]
 create
Send Mail ( V1 )
End Point [ /sendmail ]
 create
Unsubscribe Email ( V1 )
End Point [ /unsubscribe ]
 create
Order Level Handling Charge ( V1 , V2 )
End Point [ /orderhandling ]
 create
Post to Stat ( V1 )
End Point [ /stat ]
 create
ordercarddetails ( V1 )
End Point [ /ordercarddetails ]
 create
Card Detail EGV Resend ( V1 )
End Point [ /carddetailsresend/:refno/:cardids/:pageno ]
 retrieve
OTP (Via Sendgrid) ( V1 )
End Point [ otp/:identifier/:value ]
 retrieve
 create
OTP (Via Sendgrid) ( V1 )
End Point [ otp/:identifier ]
 get
External Discount API(corp service discount) ( V1 )
End Point [ /external/discount ]
 create
Revalidation API V3 ( V3 )
End Point [ /giftcards/validations ]
 create
Category ( V1 , V2 )
End Point [ /category , /category/:id ]
 retrieve
Catalog Type ( V1 , V3 )
End Point [ /catalogtype ]
 create
 retrieve
Catalog Type ()
End Point [ /url/:urlPath ]
 create V1, V3
 retrieve V1
Product ( V1 , V2 )
End Point [ product/:id , /categoryproducts/:id ]
 retrieve
Catalog Search ( V1 )
End Point [ /search ]
 create
Catalog Auto Search Suggest ( V1 )
End Point [ /autosearchsuggest ]
 create
ReloadVerify ( V1 )
End Point [ /reloadverify ]
 create
Catalog Auto Search V3 ( V3 )
End Point [ /search/:q ]
 retrieve
Payment ( V1 )
End Point [ /payment/:payment_id ]
 update
Static Block ( V3 )
End Point [ /cms/blocks ]
 retrieve
Theme Category ( V3 )
End Point [ /themes/category , /themes/category/:themecategoryId , /themes/category/product/:productId ]
 create
2.Guest Role
Customer Verify ( V1 )
End Point [ /person/verify ]
 create
Customer Mobile Verify ( V1 )
End Point [ /person/mobile/verify ]
 create
Customer Registration ( V1 )
End Point [ /person/ , /person/register/ ]
 create
 retrieve
Customer Confirmation ( V1 )
End Point [ /person/confirmation/ ]
 create
Customer Resend Confirmation ( V1 )
End Point [ /person/resendconfirmation/ ]
 create
Customer Forgot Password ( V1 )
End Point [ /person/forgotpassword ]
 create
Customer Reset Password ( V1 )
End Point [ /person/resetpassword ]
 create
Customer Loginotp ( V1 )
End Point [ /person/loginotp/ ]
 create
Customer External Login ( V1 )
End Point [ /externallogin/ ]
 create
Customer ( V1 )
End Point [ /corporate/customers , /person ]
 create
 retrieve
Catalog Product ( V1 )
End Point [ /products/:id , /products/:id/store/:store , /products , /products/store/:store , /products/category/:category_id , /products/store/:store/category/:category_id , /products/category/:category_id/store/:store ]
 retrieve
Product Category ( V1 )
End Point [ /products/:id/categories , /products/:id/categories/:category_id ]
 retrieve
Product Image ( V1 )
End Point [ /products/:id/images/:image , /products/:id/images/:image/store/:store , /products/:id/images , /products/:id/images/store/:store ]
 retrieve
Order Card(s) Retrieval ( V3 )
End Point [ /order/:increment_id/cards , /orders/:increment_id/cards ]
 retrieve
Orders ( V1 , V2 )
End Point [ /spend/:order_id , /spend , /orders/page/:page ]
 create
Customer Create/Update/Retrieve ( V3 )
End Point [ /customers/:id , /customers ]
 create
Product Details ( V3 )
End Point [ /orders/:id/products ]
 retrieve
Orders V3 (Async/Sync) ( V3 )
End Point [ /order/:id , /order , ]
 create
 retrieve
Orders V3 (Async/Sync) ( V3 )
End Point [ /orders/:id ]
 create
Order Payment ( V1 )
End Point [ /orders/:id/payment ]
 retrieve
Order Status ( V1 , V2 )
End Point [ /status/:refno , /status/ ]
 retrieve
 create
Order Resend ( V1 , V2 )
End Point [ /resend/:refno ]
 retrieve
Order Cancel ( V1 , V2 )
End Point [ /ordercancel/:order_id ]
 retrieve
Checkout ( V3 )
End Point [ /checkout/payment/methods ]
 create
 retrieve
Payment Card Initialise ( V1 )
End Point [ /payments/:payment_code/initialise ]
 create
Pincode ( V1 )
End Point [ /pincode/:key ]
 retrieve
Check Balance ( V1 , V2 )
End Point [ /checkbalance ]
 create
Settings ( V1 , V2 )
End Point [ /settings/:id , /settings , /websites/:websiteId/settings ]
 retrieve
Send OTP ( V1 )
End Point [ /sendotp ]
 create
Store Locator ( V1 )
End Point [ /storelocator ]
 create
Discount API ( V1 )
End Point [ /discount ]
 create
Discount API V3 ( V3 )
End Point [ /discounts ]
 create
Verify OTP ( V1 )
End Point [ /verifyotp ]
 create
Spend Refernce Number ( V1 , V2 )
End Point [ /refno ]
 retrieve
CMS ( V1 )
End Point [ /cms ]
 create
Send Mail ( V1 )
End Point [ /sendmail ]
 create
Unsubscribe Email ( V1 )
End Point [ /unsubscribe ]
 create
Order Level Handling Charge ( V1 , V2 )
End Point [ /orderhandling ]
 create
ordercarddetails ( V1 )
End Point [ /ordercarddetails ]
 create
mycarddetails ( V1 )
End Point [ /mycarddetails ]
 create
Card Detail EGV Resend ( V1 )
End Point [ /carddetailsresend/:refno/:cardids/:pageno ]
 retrieve
OTP (Via Sendgrid) ( V1 )
End Point [ otp/:identifier/:value ]
 retrieve
 create
OTP (Via Sendgrid) ( V1 )
End Point [otp/:identifier]
 retrieve
External Discount API(corp service discount) ( V1 )
End Point [ /external/discount ]
 create
Revalidation API V3 ( V3 )
End Point [ /giftcards/validations ]
 create
Category ( V1 , V2 )
End Point [ /category , /category/:id ]
 retrieve
Catalog Type ( V1 , V3 )
End Point [ /catalogtype ]
 create
 retrieve
Catalog Type ( V1 , V3 )
End Point [ /url/:urlPath ]
 create
Product ( V1 , V2 )
End Point [ product/:id , /categoryproducts/:id ]
 retrieve
Catalog Search ( V1 )
End Point [ /search ]
 create
Catalog Auto Search Suggest ( V1 )
End Point [ /autosearchsuggest ]
 create
ReloadVerify ( V1 )
End Point [ /reloadverify ]
 create
Category V3 ( V3 )
End Point [ /catalog/categories ]
 retrieve
Catalog Auto Search V3 ( V3 )
End Point [ /search/:q ]
 retrieve
Homebanner ( V1 )
End Point [ /homebanner , /homebanner/:bannertype ]
 retrieve
Static Block ( V3 )
End Point [ /cms/blocks ]
 retrieve
Theme Category ( V3 )
End Point [ /themes/category , /themes/category/:themecategoryId , /themes/category/product/:productId ]
 create
3.Admin Role
Customer Address ( V1 )
End Point [ /person/address/:id , /person/address/ ]
 create
 retrieve
 update
 delete
Customer Profile ( V1 , V3 )
End Point [ /person/profile , /person/profile/:id ]
 retrieve
Customer ( V1 )
End Point [ /corporate/customers , /person ]
 retrieve
 update
 delete	
Catalog Product ( V1 )
End Point [ /products/:id , /products/:id/store/:store , /products , /products/store/:store , /products/category/:category_id , /products/store/:store/category/:category_id , /products/category/:category_id/store/:store ]
 create
 retrieve
 update
 delete
Product Category ( V1 )
End Point [ /products/:id/categories , /products/:id/categories/:category_id ]
 create
 retrieve
 delete
Product Image ( V1 )
End Point [ /products/:id/images/:image , /products/:id/images/:image/store/:store , /products/:id/images , /products/:id/images/store/:store ]
 create
 retrieve
 update
 delete
Product Website ( V1 )
End Point [ /products/:product_id/websites/:website_id , /products/:product_id/websites ]
 create
 retrieve
 delete
Order Card(s) Retrieval ( V3 )
End Point [ /order/:increment_id/cards , /orders/:increment_id/cards ]
 retrieve
Orders ( V1 , V2 )
End Point [ /spend/:order_id , /spend , /orders/page/:page ]
 retrieve
Order Items ( V1 )
End Point [ /orders/:id/items ]
 retrieve
Order Addresses ( V1 )
End Point [ /orders/:order_id/addresses/:address_type , /orders/:order_id/addresses ]
 retrieve
Order Comments ( V1 )
End Point [ /orders/:id/comments ]
 retrieve
Stock Item ( V1 )
End Point [ /stockitems/:id , /stockitems ]
 retrieve
 update
Whitelisting / Blacklisting Products ( V3 )
End Point [ /corporates/:id/products/:action ]
 create
Customer Create/Update/Retrieve ( V3 )
End Point [ /customers/:id ]
 create
Customer Create/Update/Retrieve ( V3 )
End Point [ /customers ]
 update
Customer Beneficiary ( V3 )
End Point [ /customers/:customerId/beneficiaries/:beneficiaryId ]
 create
Customer Beneficiary ( V3 )
End Point [ /customers/:customerId/beneficiaries ]
 update
Customer Network ( V3 )
End Point [ /customers/:customerId/network/cards , /customers/:customerId/network/cards/:entityId ]
 retrieve
Order Business Approval ( V3 )
End Point [ /orders/bulk/:refno/bizapprove ]
 create
Orders V3 (Async/Sync) ( V3 )
End Point [ /order/:id , /order , ]
 retrieve
Order Payment ( V1 )
End Point [ /orders/:id/payment ]
 retrieve
Order Status ( V1 , V2 )
End Point [ /status/:refno , /status/ ]
 retrieve
EditResend Card History ( V3 )
End Point [ /resend/cards/history ]
 retrieve	
Checkout ( V3 )
End Point [ /checkout/payment/methods ]
 create
 retrieve
Settings ( V1 , V2 )
End Point [ /settings/:id , /settings , /websites/:websiteId/settings ]
 retrieve
CMS ( V1 )
End Point [ /cms ]
 create
Admin Roles V3 ( V3 )
End Point [ /admin/roles ]
 retrieve
Catalog Type ( V1 )
End Point [ /url/:urlPath ]
 retrieve
Catalog Type ( V1 , V3 )
End Point [ /catalogtype ]
 retrieve
Product V3 ( V3 )
End Point [ catalog/products/:sku ]
 create
Product V3 ( V3 )
End Point [ catalog/products ]
 update
Sales Rule ( V3 )
End Point [ /salesrules , /salesrules/:ruleId ]
 retrieve
 create
 update
Static Block ( V3 )
End Point [ /cms/blocks ]
 retrieve
S2S Notification ERP Creditmemo ( V3 )
End Point [ /erp/creditmemos ]
 create
S2S Notification ERP Invoice ( V3 )
End Point [ /erp/invoices ]
 create







