using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double num1 = Convert.ToDouble(Console.ReadLine());
            double num2 = Convert.ToDouble(Console.ReadLine());
            double num3 = Convert.ToDouble(Console.ReadLine());
            double num4 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Sum : " + (num1 + num2 + num3 + num4).ToString(".000000"));
            Console.WriteLine("Average : " + ((num1 + num2 + num3 + num4) / 4).ToString(".000000"));
            Console.WriteLine("Product : " + (num1 * num2 * num3 * num4).ToString(".000000"));
            Console.WriteLine("MAX : " + Math.Max(num1, Math.Max(num2, Math.Max(num3, num4))).ToString(".000000"));
            Console.WriteLine("MIN : " + Math.Min(num1, Math.Min(num2, Math.Min(num3, num4))).ToString(".000000"));

        }

    }

}

