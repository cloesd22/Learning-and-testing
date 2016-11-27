using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projectatis.Models
{
    public class money
    {
        public double moneycounter { get; set; }

        Random rnd = new Random();

        
        public void fullroll()
        {
            if (rnd.Next(1, 2) > 1)
            {
                moneycounter = moneycounter * 2;
            }
            else
            {
                moneycounter = 0;
            }

        }


        public void stdroll()
        {
            if (rnd.Next(1, 2) > 1)
            {
                moneycounter = moneycounter * 1.1;
            }
            else
            {
                moneycounter = moneycounter*0.9;
            }

        }





    }
}