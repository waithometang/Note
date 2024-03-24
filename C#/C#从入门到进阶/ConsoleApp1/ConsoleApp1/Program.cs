using System;

namespace ConsoleApp1
{
    internal class Program
    {

        static void Main(string[] args)
        {
            // 输出语句 换行输出
            Console.WriteLine("Hello World!");
            // 不换行
            Console.Write("hello twh");
            // 读取一个字符
            int a = Console.Read();
            Console.WriteLine(a);
            // 读取输入字符串，无限
            string b = Console.ReadLine();
            Console.WriteLine(b);
            // 读取按下的键名称
            ConsoleKeyInfo c = Console.ReadKey();
            Console.WriteLine(c.Key);
            Console.ReadLine();

        }
    }
}
