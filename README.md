 * @OA\Tag(
 *     name="Admin Network API",
 *     x={
 *      "internal":true,
 *      "adminApi":true,
 *      "customerApi:true
 *      },
 * ),
 * 
 * @OA\Tag(
 *     name="URL",
 *     x={
 *      "internal":true,
 *      "customerApi":true
 *      },
 * ),
 * @OA\Tag(
 *     name="Home Banner API",
 *     x={
 *      "internal":true,
 *      "customerApi":true,
 *      "guestApi": true
 *      },
 * ),
 * 
 * @OA\Tag(
 *     name="Home Banner List API",
 *     x={
 *      "internal":true,
 *      "customerApi":true,
 *      "guestApi": true
 *      },
 * ),
 * 
 * @OA\Tag(
 *     name="OTP",
 *     x={
 *      "internal":true,
 *      "customerApi":true
 *      },
 * ),
PINELABS+Aryan.Sundaram@QCLAP3402P19308 MINGW64 /d/workspace/b2b-magento-server/src (feature/B2B-22141-api-doc)
$ ./vendor/bin/openapi  --pattern "*.php" --format json --output /d/redoc/swagger_doc/woohoo_swagger.json --debug app/code/local/GBCustom openapi/
Error: [Syntax Error] Expected Doctrine\Common\Annotations\DocLexer::T_CLOSE_CURLY_BRACES, got 'URL' at position 34377.

 * @OA\Tag(
 *     name="Verify OTP",
 *     x={
 *      "internal":true,
 *      "customerApi":true
 *      },
 * ),
