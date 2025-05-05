<?php
/**
 * @OA\RequestBody(
 *     request="customerV3GiftcardValidation",
 *     required=true,
 *     @OA\MediaType(
 *         mediaType="application/json",
 *         @OA\Schema(
 *              type="object",
 *              @OA\Property(
 *                  property="cardNumber",
 *                  description="Gift card number",
 *                  type="string",
 *                  example="8888443334815158"
 *              ),
 *         ),
 *     ),
 * ),
 *
 * @OA\Schema(
 *     schema="V3GiftcardValidationRes200",
 *     type="object",
 *     @OA\Property(property="cardNumber", type="string", example="8888443334815158"),
 *     @OA\Property(property="status", type="string", example="EXPIRED"),
 *     @OA\Property(property="balance", type="string", example="1000.00"),
 *     @OA\Property(property="expiry", type="string", format="date-time", example="2024-09-03T00:00:00+05:30"),
 *     @OA\Property(property="claimed", type="boolean", example=true),
 *     @OA\Property(property="reason", type="string", example="NONE"),
 *     @OA\Property(property="twoStepGC", type="boolean", example=false),
 *     @OA\Property(property="isCreateAndClaim", type="boolean", example=false),
 *     @OA\Property(
 *         property="currency",
 *         type="object",
 *         @OA\Property(property="code", type="string", example="INR"),
 *         @OA\Property(property="numericCode", type="string", example="356"),
 *         @OA\Property(property="symbol", type="string", example="₹"),
 *         @OA\Property(property="countryName", type="string", example="INDIA"),
 *         @OA\Property(property="currencyName", type="string", example="Indian Rupee")
 *     ),
 *     @OA\Property(property="refno", type="string", example="681866ee5351e98ea90b0ef5")
 * ),
 *
 * @OA\Schema(
 *     schema="V3GiftcardValidationRes400",
 *     type="object",
 *     @OA\Property(property="code", type="integer", example=6049),
 *     @OA\Property(property="message", type="string", example="Balance Enquiry Failed : "),
 *     @OA\Property(property="messages", type="array", @OA\Items(type="string")),
 *     @OA\Property(property="additionalTxnFields", type="array", @OA\Items(type="string"))
 * ),
 */
