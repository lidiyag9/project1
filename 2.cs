using System;

namespace ееее
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			

			int buf;
			int s = int.Parse(Console.ReadLine());
			string[] array=new string[s];
			for (int i = 0; i < s; i++) {
				array[i] = Console.ReadLine();
			}
			Console.Write("Массив до замены: ");
			for (int i = 0; i < s; i++)
			{
				Console.Write("{0}", array[i]);
			}
			for (int i = 0; i < array.Length;i++) {
				if (int.TryParse(array[i],out buf)==true) {
					array[i] = "$";
				}
			}
			Console.Write("\r\nМассив после замены: ");
			for (int i = 0; i < s;i++) {
				Console.Write("{0}", array[i]);
			}
		}
	}
}
