namespace Fanex.Athena.Extension.Utility
{
    using System;
    using System.Security.Cryptography;
   
    public static class RandomNumber
    {
        private static int GenerateRandomSeed()
        {
            // Use a 4-byte array to fill it with random bytes and convert it then
            // to an integer value.
            var randomBytes = new byte[4];

            // Generate 4 random bytes.
            using (var rng = new RNGCryptoServiceProvider())
            {
                rng.GetBytes(randomBytes);

                // Convert 4 bytes into a 32-bit integer value.
                var seed = (randomBytes[0] & 0x7f) << 24 |
                    randomBytes[1] << 16 |
                    randomBytes[2] << 8 |
                    randomBytes[3];

                return seed;
            }
        }
      
        public static int GenerateRandomInt32(int minValue, int maxValue)
        {
            var randomClass = new Random(GenerateRandomSeed());
            return randomClass.Next(minValue, maxValue);
        }
    }
}