#include <iostream>

using namespace std;

int main()
{
    int n;
    cin>>n;

    char symbols[200000];
    for(int i=0; i<n; i++){
        cin>> symbols[i];
    }

    int pos[200000];
    for(int i=0; i<n; i++){
        cin>> pos[i];
    }

    int min_moves = -1;

    for(int i=0; i< n-1; i++){
        if(symbols[i]=='R' && symbols[i+1]=='L'){
            int moves = (pos[i+1]- pos[i])/2;
            if(min_moves == -1 || moves < min_moves){
                min_moves = moves;
            }
        }
    }

    cout<<min_moves<<endl;

    return 0;
}
