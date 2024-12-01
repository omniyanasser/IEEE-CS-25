#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >>n;

    int height[100];

    for(int i=0; i<n; i++){
        cin >> height[i];
    }

    int maxIndex = 0 , minIndex = 0;

    for(int i=1; i<n; i++){

        if(height[i] > height[maxIndex]){
            maxIndex = i;
        }

        if (height[i]<= height[minIndex]){
              minIndex= i;
        }
    }

    int minSwap = maxIndex + (n-1 - minIndex);

    if (maxIndex > minIndex){
        minSwap -= 1;
    }

   cout<<minSwap<<endl;



    return 0;
}
