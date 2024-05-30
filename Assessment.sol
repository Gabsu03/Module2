make me a react.js with using same functionality of the solidity code
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BasketballScoring {
    uint256 public teamAScore;
    uint256 public teamBScore;

    event ScoreUpdated(string team, uint256 newScore);

    function addPointsToTeamA(uint256 points) public {
        require(points > 0, "Points must be greater than zero");
        teamAScore += points;
        emit ScoreUpdated("Team A", teamAScore);
    }

    function addPointsToTeamB(uint256 points) public {
        require(points > 0, "Points must be greater than zero");
        teamBScore += points;
        emit ScoreUpdated("Team B", teamBScore);
    }

    function getScores() public view returns (uint256, uint256) {
        return (teamAScore, teamBScore);
    }

    function resetScores() public {
        teamAScore = 0;
        teamBScore = 0;
        emit ScoreUpdated("Team A", teamAScore);
        emit ScoreUpdated("Team B", teamBScore);
    }
}
with also without using abi, contract address, and ether