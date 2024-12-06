#include <iostream>

using namespace std;

int maxBooks(int a[], int n,int t){
    int left=0 , right=0 , totalTime =0 , maxNumberOfBooks=0;


            while(right < n){
                totalTime += a[right];

                while(totalTime > t){
                    totalTime-=a[left];
                    left++;
                }
                 maxNumberOfBooks = max(maxNumberOfBooks, right-left +1);
                 right++;
            }

    return maxNumberOfBooks;
}

int main()
{
    int n,t;
    cin>>n>>t;

    int a[n];
    for(int i=0; i<n; i++){
        cin>>a[i];
    }
    cout<<maxBooks(a,n,t);
    return 0;
}
