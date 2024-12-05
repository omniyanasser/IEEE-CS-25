#include <iostream>
#include<algorithm>
using namespace std;

int binarySearch(int prices[], int l, int r, int shops)
{
    if(l <= r)
    {
        int mid = (l+r)/2;

        if(prices[mid] <= shops)
        {
            return binarySearch(prices, mid+1,r, shops);
        }
        else
        {
            return binarySearch(prices, l,mid-1, shops);
        }
    }
    return l;
}

int main()
{
    int n;
    cin>>n;

    int prices[100000];
    for (int i=0; i<n; i++){
        cin>>prices[i];
    }
    sort (prices , prices+n);

    int q;
    cin>>q;

    for(int i=0; i<q; i++){
        int shops;
        cin>>shops;
        int counter = binarySearch(prices,0, n-1, shops);
        cout<<counter<<endl;
    }



    return 0;
}
