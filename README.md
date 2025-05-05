<?php
/**
 * @OA\RequestBody(
 *     request="customerV3GiftcardValidation",
 *     required=true,
 *     @OA\MediaType(
 *         mediaType="application/json",
 *         @OA\Schema(
 *              type="object",
 *              required={"cardNumber"},
 *              @OA\Property(
 *                  property="cardNumber",
 *                  description="Gift card number to validate",
 *                  type="string",
 *                  example="8888443334815158"
 *              ),
 *              @OA\Property(
 *                  property="pin",
 *                  description="Optional gift card PIN (if applicable)",
 *                  type="string",
 *                  example="JVCY7F6HVP4XCW"
 *              ),
 *         ),
 *     ),
 * ),
 *
 * @OA\Schema(
 *     schema="V3GiftcardValidationRes200",
 *     type="object",
 *     @OA\Property(property="cardNumber", type="string", description="Gift card number", example="8888443334815158"),
 *     @OA\Property(property="pin", type="string", description="Gift card PIN", example="JVCY7F6HVP4XCW"),
 *     @OA\Property(property="status", type="string", description="Gift card status", example="EXPIRED"),
 *     @OA\Property(property="balance", type="string", description="Available balance on the card", example="1000.00"),
 *     @OA\Property(property="expiry", type="string", format="date-time", description="Expiry date of the gift card", example="2024-09-03T00:00:00+05:30"),
 *     @OA\Property(property="claimed", type="boolean", description="Whether the gift card has been claimed", example=true),
 *     @OA\Property(property="reason", type="string", description="Reason for the current status", example="NONE"),
 *     @OA\Property(property="twoStepGC", type="boolean", description="Indicates if the card uses two-step verification", example=false),
 *     @OA\Property(property="isCreateAndClaim", type="boolean", description="Indicates if the card was created and claimed in the same step", example=false),
 *     @OA\Property(
 *         property="currency",
 *         type="object",
 *         description="Currency details of the gift card",
 *         @OA\Property(property="code", type="string", description="Currency code", example="INR"),
 *         @OA\Property(property="numericCode", type="string", description="Numeric currency code", example="356"),
 *         @OA\Property(property="symbol", type="string", description="Currency symbol", example="₹"),
 *         @OA\Property(property="countryName", type="string", description="Country associated with the currency", example="INDIA"),
 *         @OA\Property(property="currencyName", type="string", description="Currency name", example="Indian Rupee")
 *     ),
 *     @OA\Property(property="refno", type="string", description="Transaction reference number", example="681866ee5351e98ea90b0ef5")
 * ),
 *
 * @OA\Schema(
 *     schema="V3GiftcardValidationRes400",
 *     type="object",
 *     @OA\Property(property="cardNumber", type="string", description="Gift card number", example="8888443334815158"),
 *     @OA\Property(property="pin", type="string", description="Gift card PIN", example="JVCY7F6HVP4XCW"),
 *     @OA\Property(property="code", type="integer", description="Error code", example=6049),
 *     @OA\Property(property="message", type="string", description="Error message description", example="Balance Enquiry Failed : Card expired."),
 *     @OA\Property(property="messages", type="array", description="List of additional error messages (if any)", @OA\Items(type="string")),
 *     @OA\Property(
 *         property="additionalTxnFields",
 *         type="object",
 *         description="Additional transaction details if applicable",
 *         @OA\Property(property="responseCode", type="integer", description="Internal response code", example=10001),
 *         @OA\Property(property="responseMessage", type="string", description="Message corresponding to the internal code", example="")
 *     )
 * ),
 */
