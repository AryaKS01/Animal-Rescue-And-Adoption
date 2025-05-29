/**
 * @OA\Get(
 *     path="/rest/v3/checkout/payment/methods",
 *     tags={"Checkout Payment Methods"},
 *     operationId="getV3CheckoutPaymentMethods",
 *     summary="Get available checkout payment methods",
 *     description="
 * This API is used to fetch available payment methods for checkout.
 *
 * It returns a list of enabled payment options for the user/store based on order and user context.
 *
 * Error Codes:
 *
 * <table>
 *   <tr><td>Error Code</td><td>Error Message</td></tr>
 *   <tr><td>5035</td><td>Payment {payment_code} is not available</td></tr>
 *   <tr><td>5036</td><td>Payment amount is not matching the uploaded value</td></tr>
 *   <tr><td>5080</td><td>Payment {payment_code} is restricted</td></tr>
 *   <tr><td>5440</td><td>Payment method not enabled for this store</td></tr>
 *   <tr><td>6670</td><td>Required authentication is missing in the header</td></tr>
 *   <tr><td>6675</td><td>Invalid Currency</td></tr>
 * </table>
 * ",
 *     security={{"OAuth2":{}}},
 *     @OA\Response(
 *         response=200,
 *         description="Successfully fetched available payment methods.",
 *         @OA\JsonContent(ref="#/components/schemas/V3CheckoutPaymentMethodsRes200")
 *     ),
 *     @OA\Response(
 *         response=400,
 *         description="Bad Request: Invalid input or missing parameters.",
 *         @OA\JsonContent(ref="#/components/schemas/V3CheckoutPaymentMethodsRes400")
 *     ),
 *     @OA\Response(
 *         response=401,
 *         description="Unauthorized: Access token is missing or invalid."
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Internal Server Error"
 *     )
 * )
 */
