#include <iostream>

using namespace std;

int main()
{
   int n;
   cin>>n;

   bool flag = false;
   int luckyNums[14] = {4,7 ,44,77,47,74, 444,777, 477,774, 474,747, 774,447};

   for(int i=0;i<14;i++){
    if(n % luckyNums[i] == 0){
        flag = true;
        break;

    }
   }

   if (flag){
     cout<<"YES"<<endl;
   }
   else{
    cout<<"NO"<<endl;
   }


    return 0;
}
