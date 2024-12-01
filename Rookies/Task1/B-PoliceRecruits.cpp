#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >> n;
    int counterPolice = 0 , counterCrimes=0 , event;

    while (n--){
        cin>>event;
        if(event == -1){
            if (counterPolice > 0 ){
                counterPolice-- ;
            }
            else{
                counterCrimes++;
            }
        }

        else{
            counterPolice +=event;
        }
    }

    cout<<counterCrimes<<endl;

    return 0;
}
