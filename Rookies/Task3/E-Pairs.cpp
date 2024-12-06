#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int n,k;
    cin>>n>>k;

    int arr[n];
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }
    sort(arr, arr+n);

    int counter =0 , left=0, right=1;

    while(right < n){
        int difference = (arr[right]- arr[left]);
        if(difference == k){
            ++left;
            ++right;
            ++counter;
        }
        else if(difference < k){
            ++right;
        }
        else{
            ++left;
        }

        if(left == right){
            ++right;
        }
    }

    cout<<counter<<endl;
    return 0;
}
